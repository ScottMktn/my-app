import axios from "axios"

export const getFeatureFlags = async () => {
    const res = await axios.get('http://localhost:3000/api/flags');
    const flags = res.data.flags;
    return flags;
}