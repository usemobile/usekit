import {registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";
import { InssValidator } from "../validators";

export default function IsInss(validationOptions?: ValidationOptions) {
   return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isInss",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: InssValidator
        });
   };
}
