package com.example.todo.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Entity
@Table(name = "korisnici")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Korisnici implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "korisnik_id")
    private Long korisnikId;

    private String ime;
    private String prezime;

    @Column(name = "korisnicko_ime")
    private String korisnickoIme;
    private Long status_id;
    private Long uloga_id;

    @Column(name = "lozinka") // Ensure this matches your database column
    private String lozinka;

    @Override
    public String getUsername() {
        return korisnickoIme; // Username used for authentication
    }

    @Override
    public String getPassword() {
        return lozinka; // Password used for authentication
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Return roles/authorities associated with the user
        return Collections.emptyList(); // Update this as needed based on your role implementation
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // You can implement your logic here
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // You can implement your logic here
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // You can implement your logic here
    }

    @Override
    public boolean isEnabled() {
        return true; // You can implement your logic here
    }
}
