import React from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Typography,
  Stack,
  Switch,
  IconButton,
  styled
} from '@mui/material';
import { 
  Compass,
  Settings,
  FolderTree,
  GitBranch,
  Trash2,
  Copy
} from 'lucide-react';

// Styled components
const GlassCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(18, 18, 18, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const MenuButton = styled(Button)(({ theme, selected, danger }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  padding: '8px 16px',
  color: danger ? '#f87171' : '#fff',
  backgroundColor: selected ? 'rgba(139, 92, 246, 0.7)' : 'rgba(30, 30, 30, 0.6)',
  '&:hover': {
    backgroundColor: selected ? 'rgba(139, 92, 246, 0.8)' : 'rgba(40, 40, 40, 0.8)',
    color: danger ? '#fca5a5' : '#fff',
  },
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(30, 30, 30, 0.6)',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  fontFamily: 'monospace',
  fontSize: '0.875rem',
  color: '#fff',
  whiteSpace: 'pre-wrap',
}));

const SecretField = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(30, 30, 30, 0.6)',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

const ConfigPage1 = () => {
  const menuItems = [
    { icon: FolderTree, text: 'Configure Root Path', action: 'root-path' },
    { icon: Settings, text: 'Configure GH Analysis', action: 'gh-analysis' },
    { icon: GitBranch, text: 'View Repositories', action: 'view-repos' },
    { icon: Trash2, text: 'Delete Options', action: 'delete', danger: true }
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#0a0a0a',
      position: 'relative',
    }}>
      {/* Purple gradient background */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Box sx={{
        position: 'relative',
        display: 'flex',
        gap: 3,
        p: 3,
        maxWidth: '1200px',
        mx: 'auto',
      }}>
        {/* Left sidebar menu */}
        <Stack spacing={1} sx={{ width: 256 }}>
          {menuItems.map((item, index) => (
            <GlassCard key={index}>
              <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                <MenuButton
                  startIcon={<item.icon size={18} />}
                  selected={item.action === 'gh-analysis'}
                  danger={item.danger}
                >
                  {item.text}
                </MenuButton>
              </CardContent>
            </GlassCard>
          ))}
        </Stack>

        {/* Right side configuration card */}
        <GlassCard sx={{ flex: 1 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ color: '#fff', mb: 4 }}>
              Configure analysis of application in GitHub
            </Typography>

            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  1. Create a GitHub secret
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                  In your GitHub repository, go to{' '}
                  <Box component="span" sx={{ color: '#c4b5fd' }}>
                    Settings &gt; Security &gt; Secrets and variables &gt; Actions
                  </Box>
                  {' '}and create new repository secret with the following details:
                </Typography>

                <Stack spacing={2}>
                  <SecretField>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 0.5 }}>
                      Name
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#c4b5fd', fontFamily: 'monospace' }}>
                        IMAGING_CLOUD_API_KEY
                      </Typography>
                      <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                        <Copy size={16} />
                      </IconButton>
                    </Box>
                  </SecretField>

                  <SecretField>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 0.5 }}>
                      Secret
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#c4b5fd', fontFamily: 'monospace' }}>
                        5f4aac908a054aedae75f11dff3f64c1.5
                      </Typography>
                      <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                        <Copy size={16} />
                      </IconButton>
                    </Box>
                  </SecretField>
                </Stack>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  2. Create or update build file
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                  Create a file named{' '}
                  <Box component="span" sx={{ color: '#c4b5fd' }}>
                    cast-imaging-analyzer.yml
                  </Box>
                  {' '}in the{' '}
                  <Box component="span" sx={{ color: '#c4b5fd' }}>
                    .github/workflows
                  </Box>
                  {' '}directory of your GitHub repository, and populate it with the following content:
                </Typography>

                <CodeBlock>
{`name: Imaging Cloud Analyzer Action
env:
  version: 1
on:
  push:
    branches:
      - master
      - main
  workflow_dispatch:
jobs:
  run-imaging-cloud-analyzer:
    runs-on: ubuntu-latest`}
                </CodeBlock>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                  Enable automatic error reporting
                </Typography>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  bgcolor: 'rgba(30, 30, 30, 0.6)',
                  p: 2,
                  borderRadius: 1,
                }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', mr: 2 }}>
                    If any errors occur during the analysis of this application on GitHub, they can be automatically 
                    reported to CAST. The support team will then reach out to you as soon as possible.
                  </Typography>
                  <Switch 
                    defaultChecked
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#c4b5fd',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#8b5cf6',
                      },
                    }}
                  />
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </GlassCard>
      </Box>
    </Box>
  );
};

export default ConfigPage1;