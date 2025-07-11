
import { API_BASE_URL } from './api';

// Complaint APIs
export const submitComplaint = async (complaintData) => {
  try {
    console.log('Sending complaint data to backend:', complaintData);
    const response = await fetch(`${API_BASE_URL}/complaints`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(complaintData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server response error:', errorText);
      throw new Error(`Failed to submit complaint: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in submitComplaint:', error);
    throw error;
  }
};

export const getComplaints = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/complaints`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch complaints');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getComplaints:', error);
    throw error;
  }
};

export const updateComplaintStatus = async (complainNo, statusData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/complaints/${complainNo}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(statusData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update complaint status');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in updateComplaintStatus:', error);
    throw error;
  }
};
