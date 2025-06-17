
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Camera, MapPin, Upload, CheckCircle } from 'lucide-react';

interface WasteReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reportData: any) => void;
}

const WasteReportModal = ({ isOpen, onClose, onSubmit }: WasteReportModalProps) => {
  const [reportForm, setReportForm] = useState({
    category: '',
    location: '',
    description: '',
    severity: '',
    photo: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const wasteCategories = [
    { value: 'plastic', label: 'Plastic Waste', points: 20 },
    { value: 'paper', label: 'Paper/Cardboard', points: 15 },
    { value: 'organic', label: 'Food/Organic', points: 25 },
    { value: 'electronic', label: 'E-Waste', points: 50 },
    { value: 'metal', label: 'Metal/Cans', points: 30 },
    { value: 'glass', label: 'Glass', points: 25 },
    { value: 'hazardous', label: 'Hazardous Waste', points: 75 },
    { value: 'other', label: 'Other', points: 10 }
  ];

  const locations = [
    'Library Entrance',
    'Computer Lab',
    'Cafeteria',
    'Student Center',
    'Dormitory Common Area',
    'Parking Lot',
    'Sports Complex',
    'Academic Building',
    'Garden/Outdoor Area',
    'Other (specify in description)'
  ];

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReportForm({...reportForm, photo: file});
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedCategory = wasteCategories.find(cat => cat.value === reportForm.category);
    const reportData = {
      ...reportForm,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      points: selectedCategory?.points || 0,
      status: 'pending'
    };

    setIsSubmitted(true);
    setTimeout(() => {
      onSubmit(reportData);
      setIsSubmitted(false);
      setReportForm({
        category: '',
        location: '',
        description: '',
        severity: '',
        photo: null
      });
      setPhotoPreview(null);
    }, 2000);
  };

  const selectedCategory = wasteCategories.find(cat => cat.value === reportForm.category);

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Report Submitted!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for helping keep our campus clean. You've earned {selectedCategory?.points || 0} EcoPoints!
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">+{selectedCategory?.points || 0} EcoPoints</div>
              <div className="text-sm text-green-700">Added to your account</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Report Waste
          </DialogTitle>
        </DialogHeader>
        
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-4">
            <CardDescription>Help keep our campus clean and earn EcoPoints!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="photo">Photo Evidence *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                  {photoPreview ? (
                    <div className="space-y-4">
                      <img src={photoPreview} alt="Preview" className="max-w-full h-48 object-cover rounded-lg mx-auto" />
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => document.getElementById('photo-upload')?.click()}
                      >
                        Change Photo
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto" />
                      <div className="text-gray-600">
                        <p className="font-medium">Take or upload a photo</p>
                        <p className="text-sm">JPG, PNG up to 10MB</p>
                      </div>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => document.getElementById('photo-upload')?.click()}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                    </div>
                  )}
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoUpload}
                    required
                  />
                </div>
              </div>

              {/* Waste Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Waste Category *</Label>
                <Select value={reportForm.category} onValueChange={(value) => setReportForm({...reportForm, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select waste type" />
                  </SelectTrigger>
                  <SelectContent>
                    {wasteCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        <div className="flex justify-between w-full">
                          <span>{category.label}</span>
                          <span className="text-green-600 font-medium ml-4">+{category.points} pts</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedCategory && (
                  <div className="text-sm text-green-600 font-medium">
                    You'll earn {selectedCategory.points} EcoPoints for this report!
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Select value={reportForm.location} onValueChange={(value) => setReportForm({...reportForm, location: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Where did you find this waste?" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Severity */}
              <div className="space-y-2">
                <Label htmlFor="severity">Severity Level</Label>
                <Select value={reportForm.severity} onValueChange={(value) => setReportForm({...reportForm, severity: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="How urgent is this?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Small amount</SelectItem>
                    <SelectItem value="medium">Medium - Noticeable issue</SelectItem>
                    <SelectItem value="high">High - Large accumulation</SelectItem>
                    <SelectItem value="urgent">Urgent - Health/safety concern</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Additional Details</Label>
                <Textarea
                  id="description"
                  placeholder="Any additional information about the waste or location..."
                  value={reportForm.description}
                  onChange={(e) => setReportForm({...reportForm, description: e.target.value})}
                  className="min-h-[80px]"
                />
              </div>

              {/* Current Location Button */}
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        console.log('Location captured:', position.coords);
                        // In a real app, you'd reverse geocode this to get a readable address
                      },
                      (error) => console.log('Location error:', error)
                    );
                  }
                }}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Use Current Location
              </Button>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!reportForm.category || !reportForm.location || !reportForm.photo}
              >
                Submit Report & Earn Points
              </Button>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default WasteReportModal;
