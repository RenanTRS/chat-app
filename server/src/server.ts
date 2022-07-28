import { serverHttp } from './http'
import './webSocket'

serverHttp.listen(process.env.PORT || 3333, () => console.log('Server is running'))
