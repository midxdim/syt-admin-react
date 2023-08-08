import {
    ReqAddHospitalParams,
    ReqGetHospitalSetParams,
    ReqGetHospitalSetResponse, ReqUpdateHospitalSet
} from "@api/hospital/model/hospitalSetTypes";
import {request} from "@utils/http";

export function reqGetHospitalSet({page, limit, hosname, hoscode}: ReqGetHospitalSetParams){
    return request.get<any, ReqGetHospitalSetResponse>(`/admin/hosp/hospitalSet/${page}/${limit}`, {
        params: {
            hosname,
            hoscode
        }
    });
}

export function reqAddHospitalSet(data: ReqAddHospitalParams){
    return request.post<any, null>('/admin/hosp/hospitalSet/save', data);
}

export function reqGetHospitalSetById(id: string){
    return request.get<any, null>(`/admin/hosp/hospitalSet/get/${id}`);
}

export function reqUpdateHospitalSet(data: ReqUpdateHospitalSet){
    return request.put<any, null>('/admin/hosp/hospitalSet/update', data);
}

export function reqRemoveHospitalSet(id: string){
    return request.delete<any, null>(`/admin/hosp/hospitalSet/remove/${id}`);
}

export function reqBatchRemoveHospitalSet(idList: string[]|number[]){
    return request.delete<any, null>('/admin/hosp/hospitalSet/batchRemove', {
        data: idList
    });
}
