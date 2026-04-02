import db from '../config/db.js';
export const addSchoolService = async (data) => {
  const query = 'INSERT INTO schools(name,address,latitude,longitude) VALUES(?,?,?,?)';
  const values = [data.name, data.address, data.latitude, data.longitude];
  try{
    const [result] = await db.promise.execute(query,values);
    return result;
  }catch(err){
    throw err;
  }
}
export const getSchools = async() => {
  const query = 'SELECT * FROM schools';
  try{
    const [result] = await db.promise.execute(query);
    return result;
  }catch(err){
    throw err;
  }
}