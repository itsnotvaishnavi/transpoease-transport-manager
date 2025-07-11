const API_BASE_URL = 'http://localhost:5000/api';

export { API_BASE_URL };

// User APIs
export const registerUser = async (userData) => {
  try {
    console.log('Sending user data to backend:', userData);
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server response error:', errorText);
      throw new Error(`Failed to register user: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in registerUser:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getUsers:', error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getUserById:', error);
    throw error;
  }
};

// Vehicle APIs
export const registerVehicle = async (vehicleData) => {
  try {
    console.log('Sending vehicle data to backend:', vehicleData);
    
    // Format the data to match the backend expectations
    const formattedData = {
      reg_no: vehicleData.reg_no,
      make: vehicleData.make,
      model: vehicleData.model,
      year: typeof vehicleData.year === 'string' ? parseInt(vehicleData.year, 10) : vehicleData.year,
      type: vehicleData.type,
      color: vehicleData.color,
      chassis_no: vehicleData.chassis_no,
      engine_no: vehicleData.engine_no,
      con_no: vehicleData.con_no,
      email_id: vehicleData.email_id,
      u_id: vehicleData.u_id
    };
    
    // Send data to backend
    const response = await fetch(`${API_BASE_URL}/vehicles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to register vehicle: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in registerVehicle:', error);
    throw error;
  }
};

export const getVehicles = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/vehicles`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch vehicles');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getVehicles:', error);
    throw error;
  }
};

// License APIs
export const applyLicense = async (licenseData) => {
  try {
    // Format the data to match the backend expectations
    const formattedData = {
      license_no: licenseData.license_no,
      name: licenseData.name,
      address: licenseData.address,
      con_no: licenseData.con_no,
      dob: licenseData.dob,
      qualification: licenseData.qualification,
      gender: licenseData.gender,
      vehicle_type: licenseData.vehicle_type,
      valid_date: licenseData.valid_date,
      u_id: licenseData.u_id
    };

    const response = await fetch(`${API_BASE_URL}/licenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to apply for license: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in applyLicense:', error);
    throw error;
  }
};

export const getLicenses = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/licenses`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch licenses');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getLicenses:', error);
    throw error;
  }
};

// Permit APIs
export const createPermit = async (permitData) => {
  try {
    // Format the data to match the backend expectations
    const formattedData = {
      permit_no: permitData.permit_no,
      reg_no: permitData.reg_no,
      type_of_permit: permitData.type_of_permit,
      route: permitData.route
    };

    const response = await fetch(`${API_BASE_URL}/permits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create permit: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in createPermit:', error);
    throw error;
  }
};

export const renewPermit = async (renewalData) => {
  try {
    // Format the data to match the backend expectations
    const formattedData = {
      permit_no: renewalData.permit_no,
      reg_no: renewalData.reg_no,
      renew_date: renewalData.renew_date,
      valid_date: renewalData.valid_date
    };

    const response = await fetch(`${API_BASE_URL}/permits/renew`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to renew permit: ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in renewPermit:', error);
    throw error;
  }
};

export const getPermits = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/permits`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch permits');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in getPermits:', error);
    throw error;
  }
};

// Import complaint functions from complaintService.js
import { 
  submitComplaint, 
  getComplaints, 
  updateComplaintStatus 
} from './complaintService';

// Re-export complaint functions
export { 
  submitComplaint, 
  getComplaints, 
  updateComplaintStatus 
};
