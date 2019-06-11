export const urlConst = {


    // baseUrl: 'http://59.160.98.144:9191', //live server

    // baseUrl: 'http://192.168.15.174:9191', //local server
    baseUrl: 'http://192.168.15.174:9090', //tesing server
    // baseUrl: 'http://192.168.15.175:9191', // vaibhav
    // baseUrl: 'http://192.168.15.105:9191', // aparna
    // baseUrl: 'http://192.168.15.133:9191', // rajan
    // baseUrl: 'http://192.168.15.186:9191', // madhuri
    // baseUrl: 'http://192.168.15.160:9090', // nerle



    api: '/api',
    master: '/master',

    /* ------------ Country Master ----------- */
    countryMaster: '/country',
    addCountry: '/addCountry',
    searchStateByCountryName: '/searchStateByCountryName',
    searchCountryByCode: '/searchCountryByCode',
    searchCountryByName: '/searchCountryByName',
    searchBy: '/searchBy',
    getCountry: '/getCountry',

    /* ------------ Zone Master ----------- */
    zoneMaster: '/zone',
    addZone: '/addZone',
    getStateByZoneName: '/getStateByZoneName',
    searchZoneByCode: '/searchZoneByCode',
    searchZoneByName: '/searchZoneByName',
    searchZoneByCountryId: '/searchZoneByCountryId',
    getZoneById: '/getZoneById',
    getAddressDetailsByZoneId: '/getAddressDetailsByZoneId',

    /* ------------ State Master ----------- */
    stateMaster: '/state',
    addState: '/addState',
    changeActiveStatus: '/changeActiveStatus',
    getAllState: '/getAllState',
    searchByStateCode: '/searchByStateCode',
    searchByStateName: '/searchByStateName',
    searchStateByCountryId: '/searchStateByCountryId',
    searchStateByZoneId: '/searchStateByZoneId',
    getStateById: '/getStateById',
    getAddressDetailsByStateId: '/getAddressDetailsByStateId',

    getDistrictByState: '/getDistrictByState',
    getStateByName: '/getStateByName',


    /* ------------ District Master ----------- */
    districtMaster: '/district',
    addDistrict: '/addDistrict',
    getAllDistrict: '/getAllDistrict',
    getCityByDistrict: '/getCityByDistrict',
    getDistrictByName: '/getDistrictByName',
    searchDistrictByStateId: '/searchDistrictByStateId',
    searchByDistrictCode: '/searchByDistrictCode',
    searchByDistrictName: '/searchByDistrictName',
    getDistrictById: '/getDistrictById',
    getAddressDetailsByDistrictId: '/getAddressDetailsByDistrictId',

    /* ------------ City Master ----------- */
    cityMaster: '/city',
    addCity: '/addCity',
    getAllCity: '/getAllCity',
    getCityByName: '/getCityByName',
    getPinByCity: '/getPinByCity',
    searchCityByTehsilId: '/searchCityByTehsilId',
    searchByCityCode: '/searchByCityCode',
    searchByCityName: '/searchByCityName',
    getCityById: '/getCityById',
    getAddressDetailsByCityId: '/getAddressDetailsByCityId',

    /* ------------ Pin Master ----------- */
    pinMaster: '/pin',
    addPin: '/addPin',
    getAllPin: '/getAllPin',
    getPin: '/getPin',
    getPinByPinCode: '/getPinByPinCode',
    searchByPinCode: '/searchByPinCode',
    getAddressDetailsByPin: '/getAddressDetailsByPin',
    getPinById: '/getPinById',
    searchPinByCityId: "/searchPinByCityId",
    getAddressDetailsByPinId: '/getAddressDetailsByPinId',

    /* ------------ Tehsil Master ----------- */
    tehsil: '/tehsil',
    addTehsil: '/addTehsil',
    searchTehsilByDistrictId: '/searchTehsilByDistrictId',
    searchTehsilByCode: '/searchTehsilByCode',
    searchTehsilByName: '/searchTehsilByName',
    getTehsilById: '/getTehsilById',
    getAddressDetailsByTehsilId: '/getAddressDetailsByTehsilId',

    /* ------------ Part Master ----------- */
    part: '/part',
    addPart: '/addPart',
    searchPartByOemName: '/searchPartByOemName',
    searchPartByPartFamily: '/searchPartByPartFamily',
    searchPartByPlantCode: '/searchPartByPlantCode',
    getPartsById: '/getPartsById',

    /* ------------ Make Master ----------- */
    make: '/make',
    addMake: '/addMake',
    getMakeById: '/getMakeById',
    searchMakeByCode: '/searchMakeByCode',
    searchMakeByName: '/searchMakeByName',

    /* ------------ Segment Master ----------- */
    segment: '/segment',
    addSegment: '/addSegment',
    getSegmentByMakeId: '/getSegmentByMakeId',
    searchSegmentByCode: '/searchSegmentByCode',
    searchSegmentByName: '/searchSegmentByName',
    getSegmentById: '/getSegmentById',
    getDetailsBySegmentId: '/getDetailsBySegmentId',

    /* ------------ Product Master ----------- */
    product: '/product',
    addProduct: '/addProduct',
    getProductBySegmentId: '/getProductBySegmentId',
    searchProductByCode: '/searchProductByCode',
    searchProductByName: '/searchProductByName',
    getProductById: '/getProductById',
    getDetailsByProductId: '/getDetailsByProductId',

    /* ------------ Variant Master ----------- */
    variant: '/variant',
    addVariant: '/addVariant',
    getVariantByProductId: '/getVariantByProductId',
    searchByVariantCode: '/searchByVariantCode',
    searchByVariantName: '/searchByVariantName',
    getVariantById: '/getVariantById',
    getDetailsByVariantId: '/getDetailsByVariantId',

    /* ------------ Model Master ----------- */
    model: '/model',
    addModel: '/addModel',
    getModelByVariantId: '/getModelByVariantId',
    searchModelByCode: '/searchModelByCode',
    searchModelByName: '/searchModelByName',
    getModelById: '/getModelById',
    getDetailsByModelId: '/getDetailsByModelId',

    /* ------------ Material Master ----------- */
    material: '/material',
    addMaterial: '/addMaterial',
    getMaterialByModelId: '/getMaterialByModelId',
    searchByMaterialCode: '/searchByMaterialCode',
    searchByMaterialName: '/searchByMaterialName',
    getMaterialById: '/getMaterialById',
    getDetailsByMaterialId: '/getDetailsByMaterialId',
    searchBySerialNumber: '/searchBySerialNumber',
    getProductDetailsBySerialNumber: '/getProductDetailsBySerialNumber',
    getDetailsBySerialNumber: '/getDetailsBySerialNumber',

    /* ------------ Customer Master ----------- */
    customer: '/customer',
    createCustomer: '/createCustomer',
    searchByCustomerName: '/searchByCustomerName',
    searchByMobileNo: '/searchByMobileNo',
    getCustomerByMobileNumber: '/getCustomerByMobileNumber',
    getCustomerDetailsByMobileNumber: '/getCustomerDetailsByMobileNumber',
    getCustomerById: '/getCustomerById',

    /* ------------ Customer Product ----------- */
    customerProduct: '/customerProduct',
    addCustomerProduct: '/addCustomerProduct',
    searchBySerialNo: '/searchBySerialNo',
    getCustomerProductDetailsById: '/getCustomerProductDetailsById',

    /* ------------ Service Center Creation ----------- */
    serviceCenterCreation: '/serviceCenterCreation',
    addServiceCenter: '/addServiceCenter',
    getServiceCenterById: '/getServiceCenterById',
    searchByServiceCenter: '/searchByServiceCenter',

    /* ------------ Customer Service Booking ----------- */
    service: '/service',
    getAllStatus: '/getAllStatus',
    createService: '/createService',
    getTechnician: '/getTechnician',
    getServiceById: '/getServiceById',
    getAllServices: '/getAllServices',
    getPreferredTime: '/getPreferredTime',
    refuseByServiceCenter: '/refuseByServiceCenter',
    getServiceDetailsById: '/getServiceDetailsById',
    getServiceCenterStatus: '/getServiceCenterStatus',
    searchAssignServiceBooking: '/searchAssignServiceBooking',
    getserviceCenterAndTechnician: '/getserviceCenterAndTechnician',
    assignServiceBookingByServiceCenter: '/assignServiceBookingByServiceCenter',

    /* ------------ Complaint And Feedback ----------- */
    complaint: '/complaint',
    getCustomerByServiceBookingNumber: '/getCustomerByServiceBookingNumber',
    getAllComplaintType: '/getAllComplaintType',
    addComplaint: '/addComplaint',
    getComplaintSearch: '/getComplaintSearch',
    getComplaintsById: '/getComplaintsById',
    searchByMobileNumber: '/searchByMobileNumber',
    closeComplaint: '/closeComplaint',

    /* ------------ Role Master ----------- */
    role: '/role',
    getActiveRoles: '/getActiveRoles',
    assignFunctionsToRole: '/assignFunctionsToRole',
    getFunctionsByRole: '/getFunctionsByRole',
    getFunctionsByRoleHorizontal: '/getFunctionsByRoleHorizontal',
    getFunctionsByRoleVertical: '/getFunctionsByRoleVertical',
    getRoleById: '/getRoleById',
    getSubMenu: '/getSubMenu',
    searchByRole: '/searchByRole',
    searchRole: '/searchRole',

    /* ------------ Warranty Master ----------- */
    warranty: '/warranty',
    checkExtendedWarranty: '/checkExtendedWarranty',
    getWarrantyMasterById: '/getWarrantyMasterById',

    /* ------------ Amc ----------- */

    amc: '/amc',
    addAMC: '/addAMC',
    getAMCById: '/getAMCById',
    getAMCDuration: '/getAMCDuration',
    getAMCType: '/getAMCType',
    searchByAmcNumber: '/searchByAmcNumber',
    assignServiceBooking: '/assignServiceBooking',
    amcMaster: '/amcMaster',
    getAmcByType: '/getAmcByType',
    searchByAmcType: '/searchByAmcType',
    getAmcById: '/getAmcById',

    /* ------------ Technician ----------- */
    serviceCenterBooking: '/serviceCenterBooking',
    searchAssignServiceCenter: '/searchAssignServiceCenter',

    /* ------------ Warranty Registration ----------- */
    getWarranty: '/getWarranty',
    addWarranty: '/addWarranty',
    getAllWarranty: '/getAllWarranty',
    warrantyRegistration: '/warrantyRegistration',
    searchByWarrantyRegistrationNo: '/searchByWarrantyRegistrationNo',
    getWarrantyType: '/getWarrantyType',

    /* ------------ Incentive Management ----------- */
    incentivemanagement: '/incentivemanagement',
    addIncentive: '/addIncentive',

    /* ------------ Incentive Master ----------- */
    incentiveMaster: '/incentiveMaster',
    saveIncentive: '/saveIncentive',
    searchByIncentiveType: '/searchByIncentiveType',
    searchByApplicableHours: '/searchByApplicableHours',
    getDetailsByIncentiveType: '/getDetailsByIncentiveType',
    getIncentiveById: '/getIncentiveById',

    /* ------------ Excel download/upload ----------- */
    downloadExcel: '/downloadExcel',
    excelTemplate: '/excelTemplate',
    uploadExcel: '/uploadExcel',
    download: '/download',

    /* ------------ Excel download/upload ----------- */
    link: '/link',
    addLink: '/addLink',
    addLinkOption: '/addLinkOption',
    searchLinkOption: '/searchLinkOption',
    searchByLinkType: '/searchByLinkType',
    getLinkOptionById: '/getLinkOptionById',
    searchByDocumentName: '/searchByDocumentName',

    /* ------------ Glen User ----------- */
    user: '/user',
    getSystemDate: '/getSystemDate',
    getUsersByRole: '/getUsersByRole',

    /* ------------ Notification ----------- */
    notification: '/notification',
    addNotification: '/addNotification',
    getNotificationById: '/getNotificationById'
};
