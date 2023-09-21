import { useState, useEffect } from 'react';

const SESSION_BLOCK_DURATION = 5 * 60 * 1000; // 5 minutos em milissegundos

const SessionBlocker = () => {
  const [isSessionBlocked, setIsSessionBlocked] = useState(false);
  const sessionBlockedUntil = Number(localStorage.getItem('sessionBlockedUntil'));
  
  

  useEffect(() => {
    console.log("adokdokas")
    /*
    const unblockSession = () => {
      setIsSessionBlocked(false);
      localStorage.removeItem('sessionBlockedUntil');
    };

    const checkSessionBlock = () => {
      if (sessionBlockedUntil && sessionBlockedUntil > Date.now()) {
        setIsSessionBlocked(true);
      } else {
        unblockSession();
      }
    };

    checkSessionBlock();
    */
    
  }, [isSessionBlocked]);

  return (
    <div>
      {isSessionBlocked ? (
        <div>
          Sessão bloqueada. Aguarde {Math.ceil((sessionBlockedUntil - Date.now()) / 1000)} segundos.
        </div>
      ) : (
        <div>Sessão desbloqueada.</div>
      )}
    </div>
  );
};

export default SessionBlocker;
