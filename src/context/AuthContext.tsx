
import React, { createContext, useState, useContext, ReactNode } from "react";
import { registerUser, getUserById } from "../services/api";

interface User {
  id: string;
  name: string;
  email?: string;
  attribute?: string;
  [key: string]: any; // Allow for additional properties
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  isLoading: boolean; // Added missing property
  register: (userData: any) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Added state for isLoading

  // Simulate checking for authentication on initial load
  React.useEffect(() => {
    // Check for saved auth tokens or user data in localStorage
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  // Register a new user
  const register = async (userData: any): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await registerUser(userData);
      console.log('Registration response:', response);
      
      // For demo purposes, automatically log in the user after registration
      setIsAuthenticated(true);
      setUser({
        id: response.userId || userData.id,
        name: userData.name,
        email: userData.email,
        attribute: userData.attribute,
        ...userData
      });
      
      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify({
        id: response.userId || userData.id,
        name: userData.name,
        email: userData.email,
        attribute: userData.attribute
      }));
      
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed. Please try again.");
      setLoading(false);
      return false;
    }
  };

  // Login user
  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      // For demo purposes, we're simulating authentication since we don't have a complete auth system
      // In a real app, you'd make an API call to verify credentials
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo user for testing
      const demoUser = {
        id: "USR-1001",
        name: "Demo User",
        email: email,
        attribute: "Admin"
      };
      
      setIsAuthenticated(true);
      setUser(demoUser);
      
      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(demoUser));
      
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password.");
      setLoading(false);
      return false;
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        error,
        isLoading, // Expose isLoading property
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
