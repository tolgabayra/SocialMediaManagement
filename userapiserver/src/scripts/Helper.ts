import Crypto from "crypto"
import Jwt from "jsonwebtoken"


export class Helper {
 
    public GenerateAccessToken(payload:any) {
        return Jwt.sign(payload, process.env.JWT_SECRET_KEY ?? "TTTSTTTXTTCT",{expiresIn: "3d"});
    }

    
    public GenerateRefreshToken(payload:any) {
        return Jwt.sign(payload, process.env.JWT_SECRET_KEY ?? "TTSTTTXTTTCTT");
    }

    
    public HashPassword(payload:any) {
        return Crypto.createHash("sha256").update(payload).digest("base64");
    }

    /**
     * tolga
     */
    public tolga() {
        return "TOLGA"
    }


}