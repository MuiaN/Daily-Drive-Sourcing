import React from 'react';
import { useAuthStore } from '../store/authStore';
import { User, Settings, LogOut, Building2, Phone, Mail } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, signOut } = useAuthStore();

  const mockUserDetails = {
    name: 'John Smith',
    company: 'Smith Auto Repairs',
    phone: '+254 712 345 678',
    address: 'Nairobi, Kenya',
    role: 'repair_shop',
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-card rounded-lg shadow-md p-6 border border-border">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-card-foreground">Profile</h1>
          <button
            onClick={handleSignOut}
            className="flex items-center text-destructive hover:text-destructive/80"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="text-card-foreground">{mockUserDetails.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Building2 className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Company</p>
                <p className="text-card-foreground">{mockUserDetails.company}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-card-foreground">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-card-foreground">{mockUserDetails.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Settings className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Account Type</p>
                <p className="text-card-foreground capitalize">
                  {mockUserDetails.role.replace('_', ' ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-md p-6 border border-border">
        <h2 className="text-xl font-semibold mb-4 text-card-foreground">
          Account Settings
        </h2>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-accent flex items-center text-card-foreground">
            <Settings className="h-5 w-5 mr-2" />
            Edit Profile
          </button>
          <button className="w-full text-left px-4 py-2 rounded-md hover:bg-accent flex items-center text-card-foreground">
            <Mail className="h-5 w-5 mr-2" />
            Update Email Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;