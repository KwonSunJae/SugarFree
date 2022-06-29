
export default function decode_jwt(token){
    var base64Payload = token.split('.')[1];
    var payload = Buffer.from(base64Payload, 'base64');
    var result = JSON.parse(payload.toString());
    return result
}