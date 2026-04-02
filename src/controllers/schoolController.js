import { addSchoolService, getSchools } from '../service/schoolService.js';
export async function addSchool(req, res) {
  const { name, address, lat, lng } = req.body;
  const latitude = Number(lat), longitude = Number(lng);
  if (!name || !address) {
    return res.status(400).json({ message: "Data is missing" });
  }
  if (typeof name !== 'string' || typeof address !== 'string') {
    return res.status(400).json({ message: "Invalid Data" });
  }
  if (Number.isNaN(longitude) || Number.isNaN(latitude)) {
    return res.status(400).json({ message: "Latitude and Longitude must be a valid number" });
  }
  if (latitude < -90 || latitude > 90) {
    return res.status(400).json({ message: "Latitude must be between -90 and 90" });
  }
  if (longitude < -180 || longitude > 180) {
    return res.status(400).json({ message: "Longitude must be between -180 and 180" });
  }

  let schoolData = {
    name: name,
    address: address,
    latitude: latitude,
    longitude: longitude
  };

  try {
    const result = await addSchoolService(schoolData);
    return res.status(201).json({ message: "School added Successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

export async function listSchools(req, res) {
  const { lat, lng } = req.query;
  const latitude = Number(lat), longitude = Number(lng);
  if (Number.isNaN(longitude) || Number.isNaN(latitude)) {
    return res.status(400).json({ message: "Latitude and Longitude must be a valid number" });
  }
  try{
    const schools = await getSchools();
    const schoolArray = schools.map(school => {
      let x = school.longitude - longitude;
      let y = school.latitude - latitude;
      x = Math.pow(x,2);
      y = Math.pow(y,2);
      let sum = x+y;
      let result = Math.sqrt(sum);
      return {...school, distance:result };
    });
    schoolArray.sort((a,b) => a.distance - b.distance);
    return res.status(200).json(schoolArray);
  }catch(err){
    console.log(err.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
}