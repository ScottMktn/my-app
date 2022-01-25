import { useQuery } from "react-query";
import { getFeatureFlags } from "../services/lib/featureFlag";

/**
 * Feature flag useQuery hook.
 * @param flags the initial data from SSG/SSR
 */
export const useFeatureFlag = (flags: string[]) => {
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    "flags",
    getFeatureFlags,
    { initialData: flags }
  );

  /**
   * Checks if the given flag exists in the flags array
   * @param flag the feature flag
   * @returns true or false
   */
  const includes = (flag: string) => {
    return data.includes(flag);
  };

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    includes,
  };
};
