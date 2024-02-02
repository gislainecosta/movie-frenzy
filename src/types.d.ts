/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

type SetStateFunction<T = any> = Dispatch<SetStateAction<T>>;
