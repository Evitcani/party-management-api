import {Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {TableName} from "../../shared/documentation/databases/TableName";
import {ColumnName} from "../../shared/documentation/databases/ColumnName";
import {World} from "./World";

@Entity({name: TableName.WORLD_OWNERS})
export class WorldToUser {
    @PrimaryColumn("text", {name: ColumnName.DISCORD_ID})
    discordId: string;

    @PrimaryColumn({name: ColumnName.WORLD_ID})
    worldId?: string;

    @ManyToOne(type => World, {
        onDelete: "CASCADE"
    })
    @JoinColumn({name: ColumnName.WORLD_ID})
    world?: World;
}