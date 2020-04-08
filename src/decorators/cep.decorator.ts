import {registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";
import { CepValidator } from "../validators";

export default function IsCep(validationOptions?: ValidationOptions) {
   return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isCep",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: CepValidator
        });
   };
}
