import {AbstractConverter} from "./AbstractConverter";
import {SpecialChannel} from "../../../backend/entity/SpecialChannel";
import {SpecialChannelDTO} from "mnemoshared/dist/src/dto/model/SpecialChannelDTO";
import {DTOType} from "mnemoshared/dist/src/dto/DTOType";
import {StringUtility} from "mnemoshared/dist/src/utilities/StringUtility";

export class SpecialChannelConverter extends AbstractConverter <SpecialChannel, SpecialChannelDTO> {
    convertExistingDtoToVo(vo: SpecialChannel, dto: SpecialChannelDTO): SpecialChannel {
        if (!dto) {
            console.log("Given no DTO.");
            return null;
        }

        vo.id = this.checkNumber(dto.id) || undefined;
        vo.designation = this.checkNumber(dto.designation);
        vo.channel_id = StringUtility.escapeSQLInput(dto.channel_id || null);
        vo.guild_id = StringUtility.escapeSQLInput(dto.guild_id || null);

        return vo;
    }

    convertExistingVoToDto(vo: SpecialChannel, dto: SpecialChannelDTO): SpecialChannelDTO {
        if (!vo) {
            return null;
        }

        dto.id = vo.id || null;
        dto.createdDate = vo.createdDate || null;
        dto.updatedDate = vo.updatedDate || null;
        dto.designation = vo.designation || null;
        dto.channel_id = vo.channel_id || null;
        dto.guild_id = vo.guild_id || null;

        return dto;
    }

    protected getNewDTO(): SpecialChannelDTO {
        return {dtoType: DTOType.SPECIAL_CHANNEL};
    }

    protected getNewVO(): SpecialChannel {
        return new SpecialChannel();
    }

}