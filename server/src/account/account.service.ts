import { Injectable } from '@nestjs/common';
import {PatchAccountDto} from "./dto";
import {DbService} from "../db/db.service";

@Injectable()
export class AccountService {

    constructor(private db: DbService) {}

    async create(userId: number) {
        return await this.db.account.create({
            data: {
                ownerId: userId,
                isBlockingEnabled: false
            }
        })
    }
    async getAccount(userId: number) {
        return await this.db.account.findFirstOrThrow({
            where: {
                ownerId: userId
            }
        })
    }

    async pathAccount(userId: number, patch: PatchAccountDto) {
        return await this.db.account.update({
            where: {
                ownerId: userId,
            },
            data: {
                ...patch
            }
        })
    }
}
