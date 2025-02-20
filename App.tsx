import React from 'react';
import { ClipboardList, Factory, Settings, Clock, ExternalLink, AlertCircle, CheckCircle2, Timer, Printer as Printer3D, PenTool as Tool, Layers } from 'lucide-react';

// Mock data for recent jobs
const recentJobs = [
  {
    id: 1,
    jobNumber: "AM-2024-001",
    description: "DMLS - Titanium Medical Components",
    status: "In Progress",
    startTime: "2024-03-10 08:00",
    estimatedCompletion: "2024-03-11 15:00",
    type: "Metal Printing"
  },
  {
    id: 2,
    jobNumber: "AM-2024-002",
    description: "SLA - Dental Aligners Batch",
    status: "Pending",
    startTime: "2024-03-11 09:00",
    estimatedCompletion: "2024-03-12 17:00",
    type: "Resin Printing"
  },
  {
    id: 3,
    jobNumber: "AM-2024-003",
    description: "FDM - Aerospace Prototypes",
    status: "Completed",
    startTime: "2024-03-09 10:00",
    estimatedCompletion: "2024-03-09 16:00",
    type: "Polymer Printing"
  }
];

function App() {
  const handleOpenSharePoint = (listType: string) => {
    // These URLs would be replaced with actual SharePoint list URLs
    const urls = {
      jobs: "https://sharepoint.company.com/sites/manufacturing/jobs",
      inventory: "https://sharepoint.company.com/sites/manufacturing/inventory",
      maintenance: "https://sharepoint.company.com/sites/manufacturing/maintenance"
    };
    window.open(urls[listType as keyof typeof urls], '_blank');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Progress':
        return <Timer className="w-5 h-5 text-blue-500" />;
      case 'Completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'Pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Printer3D className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Additive Manufacturing Control</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Layers className="h-6 w-6 text-blue-500" />
            <Settings className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* SharePoint Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => handleOpenSharePoint('jobs')}
            className="flex items-center justify-center px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors group"
          >
            <ClipboardList className="w-5 h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Print Jobs</span>
            <ExternalLink className="w-4 h-4 ml-2 text-gray-400" />
          </button>
          
          <button
            onClick={() => handleOpenSharePoint('inventory')}
            className="flex items-center justify-center px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors group"
          >
            <Factory className="w-5 h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Material Inventory</span>
            <ExternalLink className="w-4 h-4 ml-2 text-gray-400" />
          </button>
          
          <button
            onClick={() => handleOpenSharePoint('maintenance')}
            className="flex items-center justify-center px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors group"
          >
            <Tool className="w-5 h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Maintenance Tracker</span>
            <ExternalLink className="w-4 h-4 ml-2 text-gray-400" />
          </button>
        </div>

        {/* Recent Jobs Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500" />
                <h2 className="ml-2 text-lg font-medium text-gray-900">Active Print Jobs</h2>
              </div>
              <span className="text-sm text-gray-500">Showing recent prints</span>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {recentJobs.map((job) => (
              <div key={job.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getStatusIcon(job.status)}
                    <div className="ml-3">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-900">{job.jobNumber}</p>
                        <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{job.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900">Start: {job.startTime}</p>
                    <p className="text-sm text-gray-500">Est. Completion: {job.estimatedCompletion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;