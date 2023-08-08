/**
 * 获取医院设置列表请求参数
 *
 */
export interface ReqGetHospitalSetParams{
    /**
     * 当前页码
     */
    page: number;
    /**
     * 每页记录数
     */
    limit: number;
    /**
     * 医院名称
     */
    hosname?: string;
    /**
     * 医院编号
     */
    hoscode?: string;
}

/**
 * 获取医院设置列表响应
 */
export interface ReqGetHospitalSetResponse {
    /**
     * 当前页数据
     */
    records: HospitalSetItem[];
    /**
     * 总记录数
     */
    total: number;
    /**
     * 每页记录数
     */
    size: number;
    /**
     * 当前页码
     */
    current: number;
    /**
     * 排序字段信息
     */
    orders: any[];
    /**
     * 查询对象
     */
    hitCount: boolean;
    /**
     * 是否进行 count 查询
     */
    searchCount: boolean;
    /**
     * 总页数
     */
    pages: number;
}

/**
 * 医院设置列表项
 */
export interface HospitalSetItem {
    id: number;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: object;
    hosname: string;
    hoscode: string;
    apiUrl: string;
    signKey: string;
    contactsName: string;
    contactsPhone: string;
    status: number;
}

/**
 * 添加医院设置请求参数
 */
export interface ReqAddHospitalParams {
    apiUrl: string;
    contactsName: string;
    contactsPhone: string;
    hoscode: string;
    hosname: string;
}

/**
 * 更新医院设置请求参数
 */
export interface ReqUpdateHospitalSet extends ReqAddHospitalParams {
    id: number;
}