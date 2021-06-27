export const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: '1d' //1d => 1 dia 
}