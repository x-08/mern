import { axiosPrivate } from "./useAxios";
import useAuthContext from "./useAuthContext";
import { useEffect } from "react";

const useAxiosPrivate = () => {
  const { authState } = useAuthContext();


  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${authState?.accessToken}`;
        }
        return config;
      },
      Promise.reject
    );

    // const responseIntercept = axiosPrivate.interceptors.response.use(
    //   (response) => response,
    //   async (error) => {
    //     const prevRequest = error?.config;
    //     if (error?.response?.status === 403 && !prevRequest?.sent) {
    //       prevRequest.sent = true;
    //       // prevRequest.headers["Authorization"] = `Bearer ${newToken}`;
    //       return axiosPrivate(prevRequest);
    //     }
    //     return Promise.reject(error);
    //   }
    // );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept); //clean up function
      // axiosPrivate.interceptors.response.eject(responseIntercept); //clean up function
    };
  }, [authState]);

  return axiosPrivate;
};

export default useAxiosPrivate;
