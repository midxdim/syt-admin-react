
/**
 * 定义科室信息的结构
 */
export interface Department{
    depcode: string;
    depname: string;
    children: Department[] | null;
}

/**
 * 获取排班规则的参数结构
 */
export interface ReqGetScheduleParams{
    page: number;
    limit: number;
    hoscode: string;
    depcode: string;
}

/**
 * 排班规则响应结果的结构
 */
export interface ReqScheduleResponse {
    total: number;
    bookingScheduleList: BookingScheduleItem[];
    baseMap: BaseMap;
}

interface BaseMap {
    hosname: string;
}

export interface BookingScheduleItem {
    workDate: string;
    workDateMd?: any;
    dayOfWeek: string;
    docCount: number;
    reservedNumber: number;
    availableNumber: number;
    status?: any;
}

/**
 * 获取医生列表的响应结构
 */
export interface DoctorItem {
    id: string;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: DoctorParam;
    hoscode: string;
    depcode: string;
    title: string;
    docname: string;
    skill: string;
    workDate: string;
    workTime: number;
    reservedNumber: number;
    availableNumber: number;
    amount: number;
    status: number;
    hosScheduleId: string;
}

interface DoctorParam {
    dayOfWeek: string;
    depname: string;
    hosname: string;
}