import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { urlConst } from './urlConst';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public appDrawer;
  public currentUrl = new BehaviorSubject<string>(undefined);
  private readonly getSystemDateUrl = `${urlConst.baseUrl}${urlConst.api}${urlConst.user}${urlConst.getSystemDate}`;

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }


  private readonly getMenuUrl = `${urlConst.baseUrl}/userManagementMaster/user/getHomeTabs`;
  private readonly getSubMenuUrl = `${urlConst.baseUrl}/userManagementMaster/user/getSubMenu`;
  private readonly getAllMenuUrl = `${urlConst.baseUrl}/userManagementMaster/userType/getRolesByUserType`;

  private readonly getVerticalMenuUrl = `${urlConst.baseUrl}/api/role/getFunctionsByRoleVertical`;
  private readonly getHorizontalMenuUrl = `${urlConst.baseUrl}/api/role/getFunctionsByRoleHorizontal`;
  private readonly getAllNotificationsUrl = `${urlConst.baseUrl}${urlConst.api}${urlConst.notification}${urlConst.getNotificationById}`;
  
  // http://192.168.15.186:9191/api/role/getFunctionsByRoleVertical?roleName=Technician
  // http://192.168.15.186:9191/api/role/getFunctionsByRoleHorizontal?roleName=Technician


  private isSelectedItem = new EventEmitter();
  private isRouteObj = new EventEmitter();

  menuList
  responceObj


  constructor(private http: HttpClient) { }

  getVerticalMenu(roleName) {
    return this.http.get(`${this.getVerticalMenuUrl}`, {
      params: new HttpParams().set('roleName', roleName)
    })
  }

  getHorizontalMenu(roleName) {
    return this.http.get(`${this.getHorizontalMenuUrl}`, {
      params: new HttpParams().set('roleName', roleName)
    })
  }
  getMainMenu(userId) {
    return this.http.get(`${this.getMenuUrl}`, {
      params: new HttpParams().set('userId', userId)
    })
  }

  getAllSubMenu(userId, parentId) {
    return this.http.get(`${this.getSubMenuUrl}`,
      { params: new HttpParams().set('userId', userId).set('parentId', parentId) }
    )
  }


  getRouteResponce(routeLink: string, loginId: number) {
    const parts = routeLink.split('/');
    const lastSegment = parts.pop() || parts.pop();
    this.getMenu(loginId).subscribe(res => {
      this.menuList = res['response'];
      this.menuList.forEach(element => {

        if (lastSegment === this.removeSpaceAndLowerCase(element.roleName)) {

          this.responceObj = {
            routerId: element.id,
            routerLink: lastSegment,
            loginId: loginId
          }
          this.getGetRouteObject(this.responceObj)
        }
      });
    })
  }

  getMenu(userId) {
    return this.http.get(`${this.getAllMenuUrl}`, {
      params: new HttpParams().set('userId', userId)
    });
  }
  removeSpaceAndLowerCase(data: string) {
    var st = data.replace(/\s/g, '');;
    return st.toLocaleLowerCase()
  }

  // ==================== Event Emmit ===========================

  getChangeItemSelect(data) {
    this.isSelectedItem.emit(data);
    // console.log('user Login Event Emmit: ', data);
  }
  showChangeItemSelect(callback) {
    // console.log('Okay');
    this.isSelectedItem.subscribe(data => callback(data));
  }

  getGetRouteObject(data) {
    this.isRouteObj.emit(data);
  }
  showGetRouteObject(callback) {
    return this.isRouteObj.subscribe(data => callback(data));
  }
  getSystemDate() {
    return this.http.get(this.getSystemDateUrl);
  }
  getAllNotifications(userId: string, page, size) {
    return this.http.get(this.getAllNotificationsUrl,
      { params: new HttpParams().set('id', userId).set('page', page).set('size', size) })
  }
}
