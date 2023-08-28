import React, { useState } from 'react';
import axios from '../utils/axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

interface EventInput {
    name: string;
    description: string;
    rules: string;
}

const CreateTrackingPlan: React.FC = () => {
    const [displayName, setDisplayName] = useState('');
    const [description, setDescription] = useState('');
    const [events, setEvents] = useState<EventInput[]>([{ name: '', description: '', rules: '' }]);

    const handleEventChange = (index: number, field: string, value: string) => {
        const updatedEvents = [...events];
        const current: any = updatedEvents[index];
        if (field === 'rules') {
            try {
                const data = JSON.stringify(JSON.parse(value));
                current[field] = data;
                setEvents(updatedEvents);
            } catch (err) {
                alert(`Invalid JSON for Rules #${index}`)
            }
        } else {
            current[field] = value;
            setEvents(updatedEvents);
        }
    };

    const addEvent = () => {
        setEvents([...events, { name: '', description: '', rules: '' }]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            const response = await axios.post('/tracking-plans', {
                display_name: displayName,
                description,
                events: [events],
            });
            console.log('Tracking plan created:', response.data);
            // Reset the form after successful submission
            setDisplayName('');
            setEvents([]);
        } catch (error) {
            console.error('Error creating tracking plan:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4">Create Tracking Plan</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Display Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <Typography variant="h5">Events</Typography>
                {events.map((event, index) => (
                    <Grid container spacing={2} sx={{ margin: 2 }} key={index}>
                        <Grid item xs={12}>
                            <TextField
                                label={`Event Name #${index + 1}`}
                                value={event.name}
                                onChange={(e) => handleEventChange(index, 'name', e.target.value)}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={`Event Description #${index + 1}`}
                                value={event.description}
                                onChange={(e) =>
                                    handleEventChange(index, 'description', e.target.value)
                                }
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={`Event Rules (JSON Schema) #${index + 1}`}
                                value={event.rules}
                                onChange={(e) => handleEventChange(index, 'rules', e.target.value)}
                                required
                                fullWidth
                                multiline
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                ))}
                <Box display="flex" justifyContent="space-between">
                    <Button variant="contained" color="primary" onClick={addEvent}>
                        Add Event
                    </Button>
                    {
                        events.length !== 0 && (
                            <Button type="submit" variant="contained" color="primary">
                                Create Tracking Plan
                            </Button>
                        )
                    }
                </Box>
            </form>
        </Container>
    );
};

export default CreateTrackingPlan;
