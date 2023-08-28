import { Box } from '@mui/material';
import ProfilePic from '../../static/profile-picture.png';


function ProfilePicture() {

    return (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh', width: '40vh', background: 'linear-gradient(#45AAB8, #4565B8)' }}>
            <img
                src={ProfilePic}
                alt="Profile Picture"
                style={{ width: '92%', height: '92%' }}
            />
        </Box>
    );
};

export default ProfilePicture;