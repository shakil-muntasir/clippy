import dotenv from 'dotenv'
import { cleanEnv, port, str } from 'envalid'

dotenv.config()

export default cleanEnv(process.env, {
    APP_PORT: port(),
    MONGODB_URI: str()
})