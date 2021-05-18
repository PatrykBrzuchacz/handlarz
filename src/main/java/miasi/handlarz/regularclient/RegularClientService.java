package miasi.handlarz.regularclient;

import miasi.handlarz.regularclient.web.RegularClientCriteria;
import miasi.handlarz.regularclient.web.RegularClientDto;
import miasi.handlarz.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class RegularClientService {

    @Autowired
    private RegularClientRepository repository;
    @Autowired
    private RegularClientAssembler assembler;
    @Autowired
    private UserRepository userRepository;

    public Page<RegularClientDto> find(RegularClientCriteria criteria) {
        return repository.findAll(new RegularClientSpec(criteria), criteria.toPageRequest()).map(assembler::map);
    }

    public RegularClientDto add(RegularClientDto dto) {
        RegularClient regularClient = update(dto, new RegularClient());
        repository.save(regularClient);
        return assembler.map(regularClient);
    }

    @Transactional
    public RegularClientDto update(RegularClientDto dto) {
        RegularClient regularClient = update(dto,findEntity(dto.getId()));
        return assembler.map(regularClient);
    }

    private RegularClient update(RegularClientDto dto, RegularClient entity) {
        entity.setCity(dto.getCity());
        entity.setEmail(dto.getEmail());
        entity.setCompanyName(dto.getCompanyName());
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setHouseNumber(dto.getHouseNumber());
        entity.setStreetNumber(dto.getStreetNumber());
        entity.setStreet(dto.getStreet());
        entity.setNip(dto.getNip());
        entity.setPhoneNumber(dto.getPhoneNumber());
        entity.setUser(userRepository.findByUsername(dto.getUsername()));
        return entity;
    }

    private RegularClient findEntity(Long id) {
        return repository.getOne(id);
    }
}
