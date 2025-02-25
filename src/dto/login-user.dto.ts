import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, Length, IsNotEmpty } from "class-validator";

export class LoginUserDto{

    @ApiProperty({
        description: "Username",
        type: String,
        example: "Alya"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 30)
    username: string;

    @ApiProperty({
        description: "Password",
        type: String,
        example: "password"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/i)
    @Length(1, 30)
    password: string;

}