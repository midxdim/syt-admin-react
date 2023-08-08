import {request} from "@utils/http";
import {
    Department,
    DoctorItem,
    ReqGetScheduleParams,
    ReqScheduleResponse
} from "@api/hospital/model/hospitalScheduleTypes";

/**
 * 获取某个医院所有的科室
 */
export function reqGetDepartments(hoscode: string){
    return request.get<any, Department[]>(`/admin/hosp/department/${hoscode}`);
}

/**
 * 获取排班规则
 */
export function reqGetSchedule({page, limit, hoscode, depcode}: ReqGetScheduleParams){
    return request.get<ReqGetScheduleParams, ReqScheduleResponse>(`/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`);
}

/**
 * 获取医生列表
 */
export function reqGetDoctorList(hoscode: string, depcode: string, workDate: string){
    return request.get<any, DoctorItem[]>(`/admin/hosp/schedule/findScheduleList/${hoscode}/${depcode}/${workDate}`);
}

/**
 * 上下线排班
 */
export function reqUpdateScheduleStatus(scheduleId: string, status: number){
    return request.get<any, null>(`/admin/hosp/hospital/updateStatus/${scheduleId}/${status}`);
}