import {Body, Controller, Get, Patch, UseGuards} from '@nestjs/common';
import {ApiProperty} from "@nestjs/swagger";
import {AccountDto, PatchAccountDto} from "./dto";
import {AccountService} from "./account.service";
import {AuthGuard} from "../auth/auth.guard";
import {SessionInfo} from "../auth/session-info.decorator";
import {GetSessionInfoDto} from "../auth/dto";

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {

    constructor(private accountService: AccountService) {}

    @Get()
    @ApiProperty({
        type: AccountDto
    })
    getAccount(@SessionInfo() session: GetSessionInfoDto): Promise<AccountDto> {
        return this.accountService.getAccount(session.id)
    }

    @Patch()
    @ApiProperty({
        type: AccountDto
    })
    patchAccount(
        @Body() body: PatchAccountDto,
        @SessionInfo() session: GetSessionInfoDto
    ): Promise<AccountDto> {
        return this.accountService.pathAccount(session.id, body)
    }
}
