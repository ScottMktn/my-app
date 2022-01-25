import axios from "axios"

export const getFeatureFlags = async () => {
    const res = await axios.get('http://localhost:3000/api/flags');
    return res.data.flags;
}