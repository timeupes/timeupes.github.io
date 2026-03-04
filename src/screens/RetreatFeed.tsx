import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function RetreatFeed() {
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--app-bg)] font-display text-[var(--app-text)] selection:bg-[var(--app-accent)] selection:text-white min-h-screen pb-32 transition-colors duration-300">
      <header className="sticky top-0 z-50 px-6 pt-12 pb-6 bg-[var(--app-bg)]/80 backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-serif text-3xl italic tracking-tight" style={{ color: 'var(--app-accent)', textShadow: '0 0 10px var(--app-accent)' }}>The Retreat</h1>
          <button 
            onClick={() => navigate('/publish')}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--app-glass)] border border-[var(--app-glass-border)] text-[var(--app-text-muted)] hover:text-[var(--app-text)] transition-colors"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="px-3 py-1.5 rounded-full flex items-center space-x-2 bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
            <span className="material-symbols-outlined text-[14px]" style={{ color: 'var(--app-accent)' }}>group</span>
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-[var(--app-text-muted)]">Viewing: Friends Only</span>
          </div>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border border-[var(--app-bg)] bg-purple-500 flex items-center justify-center text-[8px] font-bold text-white">T</div>
            <div className="w-6 h-6 rounded-full border border-[var(--app-bg)] bg-blue-500 flex items-center justify-center text-[8px] font-bold text-white">L</div>
            <div className="w-6 h-6 rounded-full border border-[var(--app-bg)] bg-rose-500 flex items-center justify-center text-[8px] font-bold text-white">M</div>
            <div className="w-6 h-6 rounded-full border border-[var(--app-bg)] flex items-center justify-center text-[8px] font-bold text-white" style={{ backgroundColor: 'var(--app-accent)' }}>+4</div>
          </div>
        </div>
      </header>
      <main className="px-4">
        <div className="columns-2 gap-4 space-y-4">
          <div className="break-inside-avoid group">
            <div className="glass-card rounded-[2rem] overflow-hidden relative bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <img alt="Painting" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADYQnqGJ8pQKdIWGguJ21AEKf4SWsQjaGsRRO-n1XiF95XrOjj3lQG8W2fG01oaII-NTxjFlevcEv2PFY4JTqFVSZwRAvxyjq-u3rMeUIq2Ak5kZ4X5F6HV__1yZZKEpZsD_d_0Z0gg2UlGoSM3rirVPI-oO5Qxa94AbWi7uQDr2jRtf2Vdxvspa68yyf0vmQuZizIjSQjCycx5j6SS3Cm9EODmATP5R_o09p7vwmevMSxKT2YpL4atqgyycstmTBE7B1UW7I8mKE"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs font-serif italic text-white/90">Teresa: Painting</p>
                <p className="text-[8px] uppercase tracking-widest text-white/50 mt-1">2h ago</p>
              </div>
            </div>
          </div>
          <div className="break-inside-avoid group">
            <div className="glass-card rounded-[2rem] overflow-hidden relative bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <img alt="Yoga" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn2ZJQKZ1nreLjBwzd132japvSO8AizPe343s1mouuE1zioIsNJ7_z0lf4cYABiyOWS0j2rWUVVA-cECGrQX6-nEC9J938zx7aiecHCtwURkRKJhHMz9dh2fga65meN_zSf_Iu-x0qkGrZOD9X4zn4RS_q87WaOkmEpJ2AyUeu90U2f1uulaStSbzlE78ERtmCSnRnrGgbdJkFmpi48GK3C6NV23_qSQGNsfPzVQ4OlrTecn1jneEkJrveuXTD9nrPTy56S2hC5F8"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs font-serif italic text-white/90">Leo: Yoga</p>
                <p className="text-[8px] uppercase tracking-widest text-white/50 mt-1">45m ago</p>
              </div>
            </div>
          </div>
          <div className="break-inside-avoid group">
            <div className="glass-card rounded-[2rem] overflow-hidden relative bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <img alt="Running" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKG1qxibKLQBHrxhSkT2Q2LjSipBvV8dvTswP5tOz8gqQMSuC2PmHEcjhcBSLS8tQ-1tQ-1NM8fM3f6Wbz_KhU8g2RdSegTGBCwOQEi8mFwa2gnEhi5ensAR-NxHrYmWXy0dltoEuzRzQWZXLzc9KAUFWS_eOG3Xqqmh4Ua4kOKtBXMu3fIHpB6ri1WwTcBtiityDZcpzsSFK4AZXwU7kRBfQc75Mh0nEgXANVNjdrT7tM-Ejw-9-JLDGDufDp36cJRavdE3kWmtI"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs font-serif italic text-white/90">Marco: Trail Run</p>
                <p className="text-[8px] uppercase tracking-widest text-white/50 mt-1">Just now</p>
              </div>
            </div>
          </div>
          <div className="break-inside-avoid group">
            <div className="glass-card rounded-[2rem] overflow-hidden relative bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <img alt="Meditation" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIn8mvZiXyMsJZR71iU_mvh99x5rXooonLD4bHLK5N8mWgzLB_ZnILd51D1lyxPvNl74p_AOjWQKy8Sz9gP0-YHcHOs6pQAEHqXiig6f_PjKa8OyUcl1c9OrjovhtNlRu4eC6y1dbJ69YmbM-C03B98JD_1tZwfOk98AOoyUmMikbdW8V55dSTpN0LNZFnT8Nv40WNKLX5OXKs-xOIJ7wZIwSsvNa1GL1bptPnRK0-JOjrHYVnFx6SpBrPwdOJl6h6Qj33hHmSYJ4"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs font-serif italic text-white/90">Sira: Zen Garden</p>
                <p className="text-[8px] uppercase tracking-widest text-white/50 mt-1">5h ago</p>
              </div>
            </div>
          </div>
          <div className="break-inside-avoid group">
            <div className="glass-card rounded-[2rem] overflow-hidden relative bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <img alt="Gardening" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIDCKlZilsU8xe2zPW8lNvQav4_dfk8V5Yz-5JtrUkGUo4HxSFThzHssuaCa9CqFS2FMIkFoPRMfopRhjfiLKp13XOQuFqLOtyPPFNxVPvYJXmhvJASU5DmMleabLU3Me7n3rC-SYpN3vrNPdC52JCiSalgsBlTF-0E5P4pe_1ikSl4t23vv5m3syXl2XAD_nTBL3kY1sNdAIDmP80Ej6x9WV_yI_PylF11y8v4LqKnQQPgBbu__QvGZvKiBjrpCmZlyHyJmccPk0"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs font-serif italic text-white/90">Elena: Planting</p>
                <p className="text-[8px] uppercase tracking-widest text-white/50 mt-1">Yesterday</p>
              </div>
            </div>
          </div>
          <div className="break-inside-avoid group">
            <div className="glass-card rounded-[2rem] overflow-hidden relative bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <img alt="Journaling" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmKrhcZhhD_QnBkIZHHlRuzOsGD3lOC3xPERnkk5Uo_p7DHRQnT2ttdDjh-xGAAZYBodm52C-g9A2pE9NbrrCCVYizIzbVkn3lbhJKSz70S3NnDMJ5OP0m3i71O4RPoL4xOj28E4lOFAPxGgPYuZ5U4_WJ7leMroCP8UZOaDh9xE6mo-nA2wVzcwCVUHjI9QBAmJdS3nICkHfKuWt7fnSdBmsxdUS_hdwPQs02Pqrc789LhCcs7thK5pCcSTIEJVaA50MnPFbf_ag"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs font-serif italic text-white/90">David: Reflecting</p>
                <p className="text-[8px] uppercase tracking-widest text-white/50 mt-1">1d ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--app-glass-border)] rounded-full z-50"></div>
    </div>
  );
}
