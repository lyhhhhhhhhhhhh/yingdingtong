// @ts-ignore
/* eslint-disable */
import request from "@/lib/request";

/** addCinema POST /api/cinema/add */
export async function addCinemaUsingPost(
  body: API.CinemaAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/cinema/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteCinema POST /api/cinema/delete */
export async function deleteCinemaUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/cinema/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editCinema POST /api/cinema/edit */
export async function editCinemaUsingPost(
  body: API.CinemaEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/cinema/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getCinemaVOById GET /api/cinema/get/vo */
export async function getCinemaVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCinemaVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseCinemaVO_>("/api/cinema/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listCinemaByPage POST /api/cinema/list/page */
export async function listCinemaByPageUsingPost(
  body: API.CinemaQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCinema_>("/api/cinema/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listCinemaVOByPage POST /api/cinema/list/page/vo */
export async function listCinemaVoByPageUsingPost(
  body: API.CinemaQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCinemaVO_>("/api/cinema/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyCinemaVOByPage POST /api/cinema/my/list/page/vo */
export async function listMyCinemaVoByPageUsingPost(
  body: API.CinemaQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageCinemaVO_>("/api/cinema/my/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCinema POST /api/cinema/update */
export async function updateCinemaUsingPost(
  body: API.CinemaUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/cinema/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
