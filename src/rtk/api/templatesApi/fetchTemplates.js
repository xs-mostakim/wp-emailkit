import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTemplates = createAsyncThunk(
    'templates/fetchTemplates', async () => {
        try {
            const localhost = 'http://localhost:4000/';
            const restNonce = 'f5003035cd';

            const response = await fetch(localhost + 'template-data', {
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': restNonce
                }
            })
            return await response.json();
        } catch (error) {
            console.log(error.message);
            return error.message

        }
    }

)

