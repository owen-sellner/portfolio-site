import { Box } from '@mui/material';
import ProfilePic from '../../static/profile-picture.png';


function ProfilePicture() {

    return (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '22em', width: '22em', background: 'linear-gradient(#45AAB8, #4565B8)' }}>
            <img
                src={ProfilePic}
                alt="Profile Picture"
                style={{ width: '20em', height: '20em' }}
            />
        </Box>
    );
};

export default ProfilePicture;