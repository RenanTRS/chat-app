import { serverHttp } from './http'
import './webSocket'

serverHttp.listen(3333, () => console.log('Server is running on port 3333'))
