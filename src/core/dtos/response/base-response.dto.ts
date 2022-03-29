import {Injectable} from "@nestjs/common";
import _ = require("lodash");
import {omit} from "lodash";


@Injectable()
export class BaseResponseDto<T> {
    private success: boolean = false;
    private error = null;
    private data: T = null;
    private withoutType: any = null;

    successExec(data: T) {
        this.success = true;
        this.data = data;

    }

    successExecWithoutType(data: any) {
        this.success = true;
        this.withoutType = data;

    }

    errorExec(error: Error) {
        this.success = false;
        this.error = error;
    }

    disposeResponse() {
        const response = {
            success: this.success,
            error: this.error,
            data: this.data,
            content: this.withoutType
        };

        return (this.data) ? (this.withoutType) ? omit(response, "data") : response :  _.update(omit(response, "data"), ["error"], () => this.error);
    }


}
