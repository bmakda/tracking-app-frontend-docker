import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ListTrackingPlans: React.FC = () => {
    const [trackingPlans, setTrackingPlans] = useState([]);

    useEffect(() => {
        async function fetchTrackingPlans() {
            try {
                const response = await axios.get('/tracking-plans');
                setTrackingPlans(response.data);
            } catch (error) {
                console.error('Error fetching tracking plans:', error);
            }
        }

        fetchTrackingPlans();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Tracking Plans</Typography>
            <List>
                {trackingPlans.map((plan: any) => (
                    <ListItem key={plan._id}>
                        <ListItemText primary={plan.display_name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ListTrackingPlans;
