/**
 * 医院列表的结构
 */
export interface HospitalListItem {
    /**
     * ID 编号
     */
    id: string;
    /**
     * 创建时间
     */
    createTime: string;
    /**
     * 更新时间
     */
    updateTime: string;
    /**
     * 是否删除
     */
    isDeleted: number;
    /**
     * 参数
     */
    param: Param;
    /**
     * 医院编号
     */
    hoscode: string;
    /**
     * 医院名称
     */
    hosname: string;
    /**
     * 医院类型
     */
    hostype: string;
    /**
     * 省份编号
     */
    provinceCode: string;
    /**
     * 城市编号
     */
    cityCode: string;
    /**
     * 区域编号
     */
    districtCode: string;
    /**
     * 医院地址
     */
    address: string;
    /**
     * 医院 logo 信息
     */
    logoData: string;
    /**
     * 医院简介
     */
    intro?: any;
    /**
     * 乘车路线
     */
    route: string;
    /**
     * 医院状态
     */
    status: number;
    /**
     * 医院的预约规则
     */
    bookingRule: BookingRule;
}

/**
 * 预约规则
 */
interface BookingRule {
    /**
     * 预约周期
     */
    cycle: number;
    /**
     * 放号时间
     */
    releaseTime: string;
    /**
     * 停挂时间
     */
    stopTime: string;
    /**
     * 退号日期
     */
    quitDay: number;
    /**
     * 退号时间
     */
    quitTime: string;
    /**
     * 预约规则
     */
    rule: string[];
}

/**
 * 医院参数结构
 */
interface Param {
    /**
     * 医院类型
     */
    hostypeString: string;
    /**
     * 医院的详细地址
     */
    fullAddress: string;
}

/**
 * 省份信息的结构
 */
export interface ProvinceOrCityItem {
    /**
     * ID 编号
     */
    id: number;
    /**
     * 创建时间
     */
    createTime: string;
    /**
     * 更新时间
     */
    updateTime: string;
    /**
     * 是否被删除
     */
    isDeleted: number;
    /**
     * 参数
     */
    param: {};
    /**
     * 父级节点 ID
     */
    parentId: number;
    /**
     * 名字
     */
    name: string;
    /**
     * 值
     */
    value: string;
    /**
     * 词典编号
     */
    dictCode?: any;
    /**
     * 是否包含子节点
     */
    hasChildren: boolean;
}

/**
 * 请求获取医院列表的参数结构
 */
export interface ReqGetHospitalListParams{
    /**
     * 当前页码
     */
    page: number;
    /**
     * 每页记录数
     */
    limit: number;
    /**
     * 医院编号
     */
    hoscode?: string;
    /**
     * 医院名称
     */
    hosname?: string;
    /**
     * 医院类型
     */
    hostype?: string;
    /**
     * 省code
     */
    provinceCode?: string;
    /**
     * 市code
     */
    cityCode?: string;
    /**
     * 区code
     */
    districtCode?: string;
    /**
     * 状态
     */
    status?: number;
}

/**
 * 请求获取医院列表响应结果的结构
 */
export interface ReqGetHospitalListResponse {
    /**
     * 医院的列表数据
     */
    content: HospitalListItem[];
    pageable: Pageable;
    /**
     * 总页数
     */
    totalPages: number;
    /**
     * 医院列表的总述
     */
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: Sort;
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
}

interface Pageable {
    sort: Sort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

/**
 * 单个医院详情的结构
 */
export interface ReqGetHospitalDetail {
    bookingRule: BookingRule;
    hospital: HospitalListItem;
}
