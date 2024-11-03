interface User {
    uid: string;
    email: string;
  }
  
export interface AuthState {
    user: User | null
  }