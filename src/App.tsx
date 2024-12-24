import React, { useState } from 'react';
import { MapPin, Users, Clock, UserCircle } from 'lucide-react';
import { Timeline } from './components/Timeline';
import { MapView } from './components/MapView';
import { MurchlandGrid } from './components/MurchlandGrid';
import { AddMomentForm } from './components/forms/AddMomentForm';
import { AddMurchlandForm } from './components/forms/AddMurchlandForm';
import { useMomentStore } from './store/momentStore';
import { useMurchlandStore } from './store/murchlandStore';

type Tab = 'timeline' | 'map' | 'murchlands' | 'add';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('timeline');
  const [addingType, setAddingType] = useState<'moment' | 'murchland'>('moment');
  
  const moments = useMomentStore(state => Object.values(state.moments));
  const selectedMomentId = useMomentStore(state => state.selectedMomentId);
  const setSelectedMoment = useMomentStore(state => state.setSelectedMoment);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Murchland Family History</h1>
          <p className="mt-2 text-gray-600">A journey through time and generations</p>
        </div>
      </header>
      
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-3 py-2 rounded-md ${
                activeTab === 'timeline'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              } flex items-center space-x-2`}
            >
              <Clock className="w-5 h-5" />
              <span>Timeline</span>
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`px-3 py-2 rounded-md ${
                activeTab === 'map'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              } flex items-center space-x-2`}
            >
              <MapPin className="w-5 h-5" />
              <span>Map</span>
            </button>
            <button
              onClick={() => setActiveTab('murchlands')}
              className={`px-3 py-2 rounded-md ${
                activeTab === 'murchlands'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              } flex items-center space-x-2`}
            >
              <UserCircle className="w-5 h-5" />
              <span>Murchlands</span>
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`px-3 py-2 rounded-md ${
                activeTab === 'add'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              } flex items-center space-x-2`}
            >
              <Users className="w-5 h-5" />
              <span>Add New</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4">
        {activeTab === 'timeline' && <Timeline moments={moments} />}
        
        {activeTab === 'map' && (
          <MapView 
            moments={moments}
            selectedMomentId={selectedMomentId}
            onMomentSelect={setSelectedMoment}
          />
        )}

        {activeTab === 'murchlands' && <MurchlandGrid />}
        
        {activeTab === 'add' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setAddingType('moment')}
                className={`px-4 py-2 rounded-md ${
                  addingType === 'moment'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Add Moment
              </button>
              <button
                onClick={() => setAddingType('murchland')}
                className={`px-4 py-2 rounded-md ${
                  addingType === 'murchland'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Add Murchland
              </button>
            </div>
            
            {addingType === 'moment' ? <AddMomentForm /> : <AddMurchlandForm />}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;