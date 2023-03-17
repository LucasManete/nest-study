import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorDto } from './create-vendor.dto';

export class UpdateVendorDto extends PartialType(CreateVendorDto) {
    corporateName?: string;
    tradingName?: string;
    address?: string;
    city?: string;
    uf?: string;
    email?: string;
    password?: string;
    cep?: string;
    stateRegistration?: string;
    country?: string;
    district?: string;
    landline?: string;
    cellPhone?: string;
    segment?: string;
}
