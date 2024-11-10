declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseCinemaVO_ = {
    code?: number;
    data?: CinemaVO;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMovieVO_ = {
    code?: number;
    data?: MovieVO;
    message?: string;
  };

  type BaseResponsePageCinema_ = {
    code?: number;
    data?: PageCinema_;
    message?: string;
  };

  type BaseResponsePageCinemaVO_ = {
    code?: number;
    data?: PageCinemaVO_;
    message?: string;
  };

  type BaseResponsePageMovie_ = {
    code?: number;
    data?: PageMovie_;
    message?: string;
  };

  type BaseResponsePageMovieVO_ = {
    code?: number;
    data?: PageMovieVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type Cinema = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
  };

  type CinemaAddRequest = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    startingPrice?: string;
    userId?: number;
  };

  type CinemaEditRequest = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    id?: number;
    startingPrice?: string;
    userId?: number;
  };

  type CinemaQueryRequest = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    startingPrice?: string;
    userId?: number;
  };

  type CinemaUpdateRequest = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    id?: number;
    startingPrice?: string;
    userId?: number;
  };

  type CinemaVO = {
    cinemaAddress?: string;
    cinemaTags?: string;
    cinemaTitle?: string;
    createTime?: string;
    id?: number;
    startingPrice?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getCinemaVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getMovieVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type Movie = {
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieTitle?: string;
    movieType?: string;
    updateTime?: string;
    userId?: number;
  };

  type MovieAddRequest = {
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieTitle?: string;
    movieType?: string;
    userId?: number;
  };

  type MovieEditRequest = {
    id?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieTitle?: string;
    movieType?: string;
    userId?: number;
  };

  type MovieQueryRequest = {
    current?: number;
    id?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieTitle?: string;
    movieType?: string;
    movieYear?: string;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type MovieUpdateRequest = {
    id?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieTitle?: string;
    movieType?: string;
    userId?: number;
  };

  type MovieVO = {
    createTime?: string;
    id?: number;
    movieDuration?: number;
    moviePicture?: string;
    movieRating?: number;
    movieRegion?: string;
    movieTitle?: string;
    movieType?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageCinema_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Cinema[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCinemaVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CinemaVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMovie_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Movie[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMovieVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MovieVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    editTime?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
