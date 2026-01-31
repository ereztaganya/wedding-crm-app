import React from 'react';
import { Cmp_Sidebar } from '../components/Cmp_Sidebar';
import { Cmp_StatusBadge } from '../components/Cmp_StatusBadge';
import { Cmp_ButtonPrimary } from '../components/Cmp_ButtonPrimary';
import { AlertCircle, MessageSquare, DollarSign } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  weddingDate: string;
  status: 'in-progress' | 'completed' | 'pending' | 'overdue';
  statusText: string;
  photosSelected: number;
  photosTotal: number;
  balance: number;
}

interface Alert {
  id: string;
  type: 'payment' | 'selection' | 'message';
  client: string;
  message: string;
  time: string;
}

export function Page_AdminDashboard() {
  const clients: Client[] = [
    {
      id: '1',
      name: 'Sarah & Michael',
      weddingDate: 'Jan 15, 2026',
      status: 'in-progress',
      statusText: 'In Progress',
      photosSelected: 45,
      photosTotal: 50,
      balance: 1500
    },
    {
      id: '2',
      name: 'Emily & James',
      weddingDate: 'Dec 20, 2025',
      status: 'completed',
      statusText: 'Completed',
      photosSelected: 50,
      photosTotal: 50,
      balance: 0
    },
    {
      id: '3',
      name: 'Rachel & David',
      weddingDate: 'Feb 28, 2026',
      status: 'pending',
      statusText: 'Pending Selection',
      photosSelected: 0,
      photosTotal: 50,
      balance: 2000
    },
    {
      id: '4',
      name: 'Jessica & Ryan',
      weddingDate: 'Nov 10, 2025',
      status: 'overdue',
      statusText: 'Payment Overdue',
      photosSelected: 50,
      photosTotal: 50,
      balance: 1000
    }
  ];

  const alerts: Alert[] = [
    {
      id: '1',
      type: 'message',
      client: 'Sarah & Michael',
      message: 'New message about additional photos',
      time: '2 hours ago'
    },
    {
      id: '2',
      type: 'selection',
      client: 'Rachel & David',
      message: 'Photo selection deadline in 3 days',
      time: '5 hours ago'
    },
    {
      id: '3',
      type: 'payment',
      client: 'Jessica & Ryan',
      message: 'Payment overdue by 5 days',
      time: '1 day ago'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageSquare className="w-5 h-5" />;
      case 'payment':
        return <DollarSign className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Cmp_Sidebar />

      <div className="flex-1 overflow-y-auto">
        <div className="px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[#1A1A1A] mb-2">Admin Dashboard</h1>
            <p className="text-sm text-[#666666]">Manage clients and projects</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            <div className="p-6 border border-[#E0E0E0]" style={{ borderRadius: '4px' }}>
              <p className="text-sm text-[#666666] mb-2">Total Clients</p>
              <p className="text-[#1A1A1A]">{clients.length}</p>
            </div>
            <div className="p-6 border border-[#E0E0E0]" style={{ borderRadius: '4px' }}>
              <p className="text-sm text-[#666666] mb-2">In Progress</p>
              <p className="text-[#6B7532]">
                {clients.filter(c => c.status === 'in-progress').length}
              </p>
            </div>
            <div className="p-6 border border-[#E0E0E0]" style={{ borderRadius: '4px' }}>
              <p className="text-sm text-[#666666] mb-2">Pending Actions</p>
              <p className="text-[#1A1A1A]">{alerts.length}</p>
            </div>
            <div className="p-6 border border-[#E0E0E0]" style={{ borderRadius: '4px' }}>
              <p className="text-sm text-[#666666] mb-2">Outstanding Balance</p>
              <p className="text-[#1A1A1A]">
                ${clients.reduce((sum, c) => sum + c.balance, 0).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Clients List */}
            <div>
              <h2 className="text-[#1A1A1A] mb-6">Clients</h2>
              <div className="space-y-3">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="p-6 border border-[#E0E0E0] hover:border-[#1A1A1A] transition-colors cursor-pointer"
                    style={{ borderRadius: '4px' }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-[#1A1A1A] mb-1">{client.name}</h3>
                        <p className="text-sm text-[#666666]">{client.weddingDate}</p>
                      </div>
                      <Cmp_StatusBadge status={client.status} text={client.statusText} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-[#666666] mb-1">Photos Selected</p>
                        <p className="text-[#1A1A1A]">
                          {client.photosSelected} / {client.photosTotal}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#666666] mb-1">Balance Due</p>
                        <p className={client.balance > 0 ? 'text-[#1A1A1A]' : 'text-[#6B7532]'}>
                          ${client.balance.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts & Actions */}
            <div>
              <h2 className="text-[#1A1A1A] mb-6">Pending Actions</h2>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-6 border border-[#E0E0E0] hover:border-[#1A1A1A] transition-colors cursor-pointer"
                    style={{ borderRadius: '4px' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#F5F5F5]" style={{ borderRadius: '4px' }}>
                        {getAlertIcon(alert.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#1A1A1A] mb-1">{alert.client}</p>
                        <p className="text-sm text-[#666666] mb-2">{alert.message}</p>
                        <p className="text-xs text-[#999999]">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-[#F5F5F5]" style={{ borderRadius: '4px' }}>
                <h3 className="text-[#1A1A1A] mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Cmp_ButtonPrimary variant="primary" fullWidth>
                    Add New Client
                  </Cmp_ButtonPrimary>
                  <Cmp_ButtonPrimary variant="ghost" fullWidth>
                    Generate Report
                  </Cmp_ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
