import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { t } from 'i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.')}
            </Modal>
        </div>
    );
};
