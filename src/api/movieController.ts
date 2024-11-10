// @ts-ignore
/* eslint-disable */
import request from "@/lib/request";

/** addMovie POST /api/movie/add */
export async function addMovieUsingPost(
  body: API.MovieAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/movie/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteMovie POST /api/movie/delete */
export async function deleteMovieUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/movie/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editMovie POST /api/movie/edit */
export async function editMovieUsingPost(
  body: API.MovieEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/movie/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getMovieVOById GET /api/movie/get/vo */
export async function getMovieVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMovieVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseMovieVO_>("/api/movie/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listMovieByPage POST /api/movie/list/page */
export async function listMovieByPageUsingPost(
  body: API.MovieQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMovie_>("/api/movie/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMovieVOByPage POST /api/movie/list/page/vo */
export async function listMovieVoByPageUsingPost(
  body: API.MovieQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMovieVO_>("/api/movie/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyMovieVOByPage POST /api/movie/my/list/page/vo */
export async function listMyMovieVoByPageUsingPost(
  body: API.MovieQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageMovieVO_>("/api/movie/my/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMovie POST /api/movie/update */
export async function updateMovieUsingPost(
  body: API.MovieUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/movie/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
