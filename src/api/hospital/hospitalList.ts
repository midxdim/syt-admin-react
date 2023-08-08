import {
    ProvinceOrCityItem, ReqGetHospitalDetail,
    ReqGetHospitalListParams,
    ReqGetHospitalListResponse
} from "@api/hospital/model/hospitalListTypes";
import request from "@utils/http/request";

/**
 * 获取省份列表
 */
export function reqGetProvinceList() {
    return request.get<any, ProvinceOrCityItem[]>('/admin/cmn/dict/findByDictCode/Province');
}

/**
 * 获取市区列表
 */
export function reqGetCityList(parentId: string|number) {
    return request.get<any, ProvinceOrCityItem[]>(`/admin/cmn/dict/findByParentId/${parentId}`);
}

/**
 * 获取医院等级的信息
 */
export function reqGetHosTypes(){
    return request.get<any, ProvinceOrCityItem[]>('/admin/cmn/dict/findByDictCode/Hostype');
}

/**
 * 获取医院列表
 */
export function reqGetHospitalList({page, limit, ...params}: ReqGetHospitalListParams) {
    return request.get<any, ReqGetHospitalListResponse>(`/admin/hosp/hospital/${page}/${limit}`, {params});
}

export function reqGetHospitalDetail(id: string|number){
    return request.get<any, ReqGetHospitalDetail>(`/admin/hosp/hospital/show/${id}`);
}
