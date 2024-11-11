package com.example.todo.service.impl;
import com.example.todo.model.Korisnici;
import com.example.todo.repository.KorisniciRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    KorisniciRepository korisniciRepository;

    @Override
    public UserDetails loadUserByUsername(String korisnickoIme) throws UsernameNotFoundException {
        Korisnici korisnik = korisniciRepository.findByKorisnickoIme(korisnickoIme);
        if (korisnik == null) {
            throw new UsernameNotFoundException("User not found with username: " + korisnickoIme);
        }

        if(korisnik.getStatus_id() == 9){
            throw new Error("Pričekajte da Vas admin odobri.");
        }
        if(korisnik.getStatus_id() == 2) {
            throw new Error("Vaš račun je blokiran.");
        }
        return korisnik; // Return the Korisnici instance which implements UserDetails
    }
}
